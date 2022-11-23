/* eslint-disable react-hooks/exhaustive-deps */
import SecureLS from 'secure-ls';
import { useEffect, useState } from 'react';

const ls = new SecureLS({ encodingType: 'aes', isCompression: false });
function useLocalStorage<T>(key: string, initialValue: T) {
	// Get from local storage then
	// parse stored json or return initialValue
	const readValue = () => {
		// Prevent build error "window is undefined" but keep keep working
		if (typeof window === 'undefined') {
			return initialValue;
		}
		try {
			const item = ls.get(key);
			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			// eslint-disable-next-line no-console
			console.warn(`Error reading localStorage key “${key}”:`, error);
			return initialValue;
		}
	};
	// State to store our value
	// Pass initial state function to useState so logic is only executed once
	const [storedValue, setStoredValue] = useState(readValue);
	// Return a wrapped version of useState's setter function that ...
	// ... persists the new value to localStorage.
	const setValue = (value: T) => {
		// Prevent build error "window is undefined" but keep keep working
		if (typeof window === 'undefined') {
			// eslint-disable-next-line no-console
			console.warn(
				`Tried setting localStorage key “${key}” even though environment is not a client`,
			);
		}
		try {
			// Allow value to be a function so we have the same API as useState
			const newValue = value instanceof Function ? value(storedValue) : value;
			// Save to local storage
			ls.set(key, JSON.stringify(newValue));
			// Save state
			setStoredValue(newValue);
			// We dispatch a custom event so every useLocalStorage hook are notified
			window.dispatchEvent(new Event('local-storage'));
		} catch (error) {
			// eslint-disable-next-line no-console
			console.warn(`Error setting localStorage key “${key}”:`, error);
		}
	};
	useEffect(() => {
		setStoredValue(readValue());
	}, []);
	useEffect(() => {
		const handleStorageChange = () => {
			setStoredValue(readValue());
		};
		// this only works for other documents, not the current one
		window.addEventListener('storage', handleStorageChange);
		// this is a custom event, triggered in writeValueToLocalStorage
		window.addEventListener('local-storage', handleStorageChange);
		return () => {
			window.removeEventListener('storage', handleStorageChange);
			window.removeEventListener('local-storage', handleStorageChange);
		};
	}, []);
	return [storedValue, setValue];
}
export default useLocalStorage;
