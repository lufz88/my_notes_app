import { createContext } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();
const ContextProvider = ({ children }) => {
	const data = { cosas: 'cosas' };
	return <Context.Provider value={data}>{children}</Context.Provider>;
};

ContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default ContextProvider;
