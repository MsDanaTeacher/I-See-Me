class ChangeUserBooksColumn < ActiveRecord::Migration[7.0]
  def change
    rename_column :user_books, :book_collections_id, :book_collection_id
  end
end
