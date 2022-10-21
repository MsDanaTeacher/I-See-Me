class FollowsController < ApplicationController

    def index
        followees = @current_user.followees
        render json: followees
    end

    # def show
    #     render json: Follow.find(params[:id])
    # end

    def create
        new_follow = Follow.create!(follower_id: params[:follower_id], followee_id: params[:followee_id])
        render json: User.find(params[:followee_id]), status: :created
    end

    def destroy
        destroy_following = Follow.find_by(follower_id: @current_user.id, followee_id: params[:id])
        destroy_following.destroy
        head :no_content
    end

    # def unfollow
    #     @user = User.find(params[:id])
    #     current_user.followed_users.find_by(followee_id: @user.id).destroy
    #     # redirect_back(fallback_location: user_path(@user))
    # end
end
