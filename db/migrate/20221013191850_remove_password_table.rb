class RemovePasswordTable < ActiveRecord::Migration[7.0]
  def up
    remove_column :users, :password_digest
  end
end
