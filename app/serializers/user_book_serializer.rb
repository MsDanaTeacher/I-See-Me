class UserBookSerializer < ActiveModel::Serializer
  # attributes :id, :rating, :user_id, :book_collection_id, :discussion_questions, :student_anecdotes
  # attributes :id, :rating, :user_id, :book_collection_id, :discussion_questions, :student_anecdotes
  attributes :id, :rating, :book_collection_id, :user_id, :discussion_questions, :student_anecdotes
end
