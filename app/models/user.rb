class User < ApplicationRecord
    has_many :followed_users, foreign_key: :follower_id, class_name: 'Follow'
    has_many :followees, through: :followed_users
    has_many :user_books
    has_many :following_users, foreign_key: :followee_id, class_name: 'Follow'
    has_many :followers, through: :following_users
    has_many :book_collections, through: :user_books

    has_secure_password
    validates :username, uniqueness: :true
    validates :username, presence: :true
    # validates :name, presence: :true
    validates :grade, presence: :true
    validates :email, presence: :true
    validates :email, uniqueness: :true
    validates :password, presence: :true
    # validates :password, confirmation: { case_sensitive: true }
    # validates :password, length: { in: 4..10 }
    def not_owned_by
        unowned_books = []
        owned_books = self.user_books.pluck(:book_collection_id)
        BookCollection.all.map{|book| if !owned_books.include?(book.id) then unowned_books << book end}
        unowned_books
     end
end
