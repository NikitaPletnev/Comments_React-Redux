import React from 'react';

class CreateComment extends React.Component {

    state = {
        author: '',
        text: ''
    };

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {

        e.preventDefault();

        if (this.state.author.trim() && this.state.text.trim()) {

            this.props.onCreateComment(this.state);
            this.handleReset();
        }
    };

    handleReset = () => {

        this.setState({
            author: '',
            text: ''
        });
    };

    render() {
        return (
              <div className = "comments-form">
                <form onSubmit={ this.handleSubmit }>
                <label htmlFor="input_author" className="comments-form__label">Автор:</label>
                    <div className="comments-form__row">
                        <input type="text"
                               name="author"
                               id="input_author"
                               onChange={ this.handleInputChange }
                               value={ this.state.author }/>
                    </div>
                    <label htmlFor="input_text" className="comments-form__label">Текст:</label>
                    <div className="comments-form__row">
                        <textarea name="text"
                                  id="input_text"
                                  onChange={ this.handleInputChange }
                                  value={ this.state.text }>
                        </textarea>
                    </div>
                    <div>
                        <button type="submit">Добавить</button>
                    </div>
                </form>
           </div>
        );
    }
}

export default CreateComment;