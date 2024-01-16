import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

const API = 'http://localhost:3000/api';

export const Context = createContext();
const ContextProvider = ({ children }) => {
	const [notes, setNotes] = useState([]);
	const [tags, setTags] = useState([]);
	const [newNoteTags, setNewNoteTags] = useState([]);
	const [tagUrl, setTagUrl] = useState('');
	const getNotes = async () => {
		try {
			const res = await axios.get(`${API}/notes`);

			if (res.data) {
				return res.data.data;
			}
		} catch (error) {
			console.error('Error fetching notes:', error);
		}
	};

	const createNote = async data => {
		try {
			const res = await axios.post(`${API}/notes`, data);

			if (res.data) {
				const newNote = res.data.data;
				setNotes(await getNotes());
				return newNote;
			}
		} catch (error) {
			console.error('Error fetching notes:', error);
		}
	};

	const deleteNote = async id => {
		try {
			const res = await axios.delete(`${API}/notes/${id}`);
			if (res.data) {
				setNotes(await getNotes());
			}
		} catch (error) {
			console.error('Error fetching notes:', error);
		}
	};

	const editNote = async (id, data) => {
		try {
			const res = await axios.patch(`${API}/notes/${id}`, data);
			if (res.data.data) {
				const modifiedNote = res.data.data;
				setNotes(await getNotes());
				return modifiedNote;
			}
		} catch (error) {
			console.error('Error fetching notes:', error);
		}
	};
	const getTags = async () => {
		try {
			const res = await axios.get(`${API}/tags`);

			if (res.data) {
				return res.data.data;
			}
		} catch (error) {
			console.error('Error fetching notes:', error);
		}
	};
	const addTag = async tagName => {
		try {
			const res = await axios.post(`${API}/tags`, { name: tagName });

			if (res.data) {
				setTags(await getTags());
				return res.data.data.tag;
			}
		} catch (error) {
			console.error('Error posting tag:', error);
		}
	};

	const data = {
		getNotes,
		notes,
		setNotes,
		getTags,
		setTags,
		tags,
		addTag,
		newNoteTags,
		setNewNoteTags,
		createNote,
		deleteNote,
		editNote,
		tagUrl,
		setTagUrl,
	};
	return <Context.Provider value={data}>{children}</Context.Provider>;
};

ContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default ContextProvider;
