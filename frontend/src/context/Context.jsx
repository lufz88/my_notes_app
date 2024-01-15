import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

import { axios } from 'axios';

const API = 'http://localhost:3000/api';

export const Context = createContext();
const ContextProvider = ({ children }) => {
	const [notes, setNotes] = useState([]);

	const getNotes = async () => {
		const res = axios({
			method: 'get',
			url: `${API}/notes`,
		});
		if (res) {
			setNotes(res);
			return notes;
		}
	};

	const data = { getNotes };
	return <Context.Provider value={data}>{children}</Context.Provider>;
};

ContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default ContextProvider;
