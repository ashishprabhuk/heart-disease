from flask import Flask, jsonify

# Create Flask app
app = Flask(__name__)

# Sample data (can be replaced with data from a database)
books = [
    {'id': 1, 'title': 'Python Programming', 'author': 'John Doe'},
    {'id': 2, 'title': 'Web Development with Flask', 'author': 'Jane Smith'},
    {'id': 3, 'title': 'Data Science Essentials', 'author': 'Alice Johnson'}
]

# Route to get all books
@app.route('/api/books', methods=['GET'])
def get_books():
    return jsonify(books)

# Route to get a specific book by ID
@app.route('/api/books/<int:book_id>', methods=['GET'])
def get_book(book_id):
    book = next((book for book in books if book['id'] == book_id), None)
    if book:
        return jsonify(book)
    else:
        return jsonify({'error': 'Book not found'}), 404

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)
