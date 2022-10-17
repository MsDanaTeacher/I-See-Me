class UserBooksController < ApplicationController
    def index
        # render json: 'hello'
        # render json: @current_user.user_books, serializer: UserBooksWithDetailsSerializer
        render json: @current_user.book_collections
        # render json: @current_user.user_books
    end


    def show
        render json: UserBook.find(params[:id])
    end

    def create
        user = UserBook.create!(user_book_params)
        render json: user
    end

    def update
        user = UserBook.find(params[:id])
        user.update(user_book_params)
        render json: user
    end

    def destroy
        user = UserBook.find(params[:id])
        user.destroy
        head :no_content
    end

    private

    def user_book_params
        params.permit(:rating, :user_id, :book_collection_id, :discussion_questions, :student_anecdotes)
    end
end
