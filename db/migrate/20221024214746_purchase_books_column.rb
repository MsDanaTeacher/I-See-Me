class PurchaseBooksColumn < ActiveRecord::Migration[7.0]
  def change
    add_column :book_collections, :link, :string
  end
end
