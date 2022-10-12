class CreateBookCollections < ActiveRecord::Migration[7.0]
  def change
    create_table :book_collections do |t|
      t.string :title
      t.string :author
      t.string :subject
      t.string :image
      t.boolean :banned

      t.timestamps
    end
  end
end
