class FollowsController < ApplicationController
    def create
        new_follow = Follow.create!(follower_id: params[:follower_id], followee_id: params[:followee_id])
        render json: new_follow, status: :created
    end

    def unfollow
        @user = User.find(params[:id])
        current_user.followed_users.find_by(followee_id: @user.id).destroy
        # redirect_back(fallback_location: user_path(@user))
    end
end
