class DeleteStudentAnecdotes < ActiveRecord::Migration[7.0]
  def change
    remove_column :user_books, :student_anecdotes
  end
end
