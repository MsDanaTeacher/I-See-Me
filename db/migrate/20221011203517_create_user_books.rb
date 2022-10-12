class CreateUserBooks < ActiveRecord::Migration[7.0]
  def change
    create_table :user_books do |t|
      t.integer :rating
      t.integer :user_id
      t.integer :book_collections_id
      t.string :discussion_questions
      t.string :student_anecdotes

      t.timestamps
    end
  end
end
