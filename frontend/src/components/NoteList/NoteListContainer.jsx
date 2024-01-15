import NoteList from './NoteList';

const NoteListContainer = () => {
	const notes = [
		{
			id: 1,
			fecha: 'ahora',
			content: 'Una nota re piola que armé recién',
			tags: ['chocolate', 'compras', 'ventas'],
		},
		{
			id: 2,
			fecha: 'ahora',
			content: 'Una nota re piola que armé recién',
			tags: ['chocolate', 'compras', 'ventas'],
		},
		{
			id: 3,
			fecha: 'ahora',
			content: 'Una nota re piola que armé recién',
			tags: ['chocolate', 'compras', 'ventas'],
		},
		{
			id: 4,
			fecha: 'ahora',
			content: 'Una nota re piola que armé recién',
			tags: ['chocolate', 'compras', 'ventas'],
		},
		{
			id: 5,
			fecha: 'ahora',
			content: 'Una nota re piola que armé recién',
			tags: ['chocolate', 'compras', 'ventas'],
		},
		{
			id: 6,
			fecha: 'ahora',
			content: 'Una nota re piola que armé recién',
			tags: ['chocolate', 'compras', 'ventas'],
		},
		{
			id: 7,
			fecha: 'ahora',
			content: 'Una nota re piola que armé recién',
			tags: ['chocolate', 'compras', 'ventas'],
		},
	];
	return <NoteList notes={notes} />;
};

export default NoteListContainer;
