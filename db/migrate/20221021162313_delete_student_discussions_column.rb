class DeleteStudentDiscussionsColumn < ActiveRecord::Migration[7.0]
  def change
    remove_column :user_books, :discussion_questions
  end
end
