import React from 'react'

function PeopleView(props) {

    return (
        <div>
            <Header {...props} />
            <Main {...props} />
        </div>
    );
}

function Header(props) {
    return (
        <header>
            <p>An example using React Flux...</p>
            <h1>A LIST OF PEOPLE:</h1>
            <NewPerson {...props} />
        </header>
    );
}

function Main(props) {
    if (props.people.size === 0) {
        return (
            <p>No people in this list.</p>
        );
    }
    return (
        <section>
            <ul>
                {[...props.people.values()].reverse().map(person => (
                    <li key={person.id}>
                        <div>
                            <label>{person.text}</label>
                            <button onClick={() => props.onDelete(person.id)}>DELETE</button>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}

const ENTER_KEY_CODE = 13;
function NewPerson(props) {
    const addTodo = () => props.onAdd(props.draft);
    const onBlur = () => addTodo();
    const onChange = (event) => props.onUpdateDraft(event.target.value);
    const onKeyDown = (event) => {
        if (event.keyCode === ENTER_KEY_CODE) {
            addTodo();
        }
    };
    return (
        <input
            className="personInput"
            autoFocus={true}
            id="new-person"
            placeholder="Add name here"
            value={props.draft}
            onBlur={onBlur}
            onChange={onChange}
            onKeyDown={onKeyDown}
        />
    );
}

export default PeopleView;