import { useState, ChangeEvent, FormEvent } from 'react';
import './Form.css';

export const Form = () => {
    const [query, setQuery] = useState<string>('');

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const search = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log('query', query);
    }

    return (
    <form className="form">
        <input className="form__input input" 
            type="text" 
            placeholder="Enter you search" 
            value={query} 
            onChange={onChange} />
        <button type="submit" 
            className="form__btn btn" 
            disabled={!query.length} 
            onClick={search}>Get</button>
    </form>
    );
}