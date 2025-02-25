import s from "./SearchBar.module.css";
import {Field, Form, Formik} from 'formik';

const SearchBar = ({onSubmit}) => {
	const INITIAL_VALUES = {
		query: ''
	}
	return (
		<div>
			<Formik initialValues={INITIAL_VALUES} onSubmit={onSubmit}>
				<Form>
					<Field className={s.input} type='text' name='query' placeholder="Search" />
					<button type='submit'>Search</button>
				</Form>
			</Formik>
		</div>
	);
};

export default SearchBar;