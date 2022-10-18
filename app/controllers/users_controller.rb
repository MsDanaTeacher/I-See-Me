class UsersController < ApplicationController
    before_action :authorized, only: [:show]

    def index
        render json: User.all
    end
    
    def create #for /signup
        @user = User.create!(user_params)
        token = JWT.encode({user_id: @user.id}, secret_key)
        render json: {user: @user, token: token}
    end 

    def show #for /me
        #@current_user comes from application_controller
        render json: {user: @current_user}
    end 

    def logout 
        @current_user = nil
        head :no_content
    end 

    def login #for /login
        #find by username from body
        @user = User.find_by(username: params[:username])
        #check if user exists and password matches password digest
        if (@user && @user.authenticate(params[:password]))
            #create token for front end
            token = JWT.encode({user_id: @user.id}, secret_key)
            #pass user instance and token to front end
            render json: {user: @user, token: token}
        end 
    end

    def follow
        @user = User.find(params[:id])
        current_user.followees << @user
        redirect_back(fallback_location: user_path(@user))
    end

    def unfollow
        @user = User.find(params[:id])
        current_user.followed_users.find_by(followee_id: @user.id).destroy
        redirect_back(fallback_location: user_path(@user))
    end

    def secret_key
        Rails.application.credentials.secret_key
    end

    private

    def user_params
        params.permit(:name, :grade, :email, :username, :password)
    end
end
