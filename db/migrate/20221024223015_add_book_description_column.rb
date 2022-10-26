class AddBookDescriptionColumn < ActiveRecord::Migration[7.0]
  def change
    add_column :book_collections, :description, :string
  end
end
