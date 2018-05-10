class Api::ProfilesController < ApplicationController
  def show
    @profile = Profile.find(params[:id])
  end

  def update
    @profile = current_user.profile

    if @profile.update(profile_params)
      render :show
    else
      render json: @profile.errors.full_messages, status: 420
    end
  end

  private

  def profile_params
    params.require(:profile).permit(:user_id, :birthday, :job_title, :lives_in, :relationship_status, :owners_names,
      :breed, :fav_toy)
  end
end
