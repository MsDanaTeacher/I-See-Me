class CreateStudentQuotes < ActiveRecord::Migration[7.0]
  def change
    create_table :student_quotes do |t|
      t.string :student_quote
      t.integer :user_book_id

      t.timestamps
    end
  end
end
