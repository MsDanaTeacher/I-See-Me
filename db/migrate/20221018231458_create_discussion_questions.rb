class CreateDiscussionQuestions < ActiveRecord::Migration[7.0]
  def change
    create_table :discussion_questions do |t|
      t.string :discussion_question
      t.integer :user_book_id

      t.timestamps
    end
  end
end
