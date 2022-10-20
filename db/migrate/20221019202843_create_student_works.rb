class CreateStudentWorks < ActiveRecord::Migration[7.0]
  def change
    create_table :student_works do |t|
      t.string :student_work
      t.integer :user_book_id

      t.timestamps
    end
  end
end
