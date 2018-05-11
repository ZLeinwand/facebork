class Api::ProfilesController < ApplicationController
  def show
    @user = User.find(params[:id])
    @profile = @user.profile
  end

  def update
    @profile = Profile.find(params[:id])

    if @profile.update(profile_params)
      render :show
    else
      render json: @profile.errors.full_messages, status: 420
    end
  end

  private

  def profile_params
    params.require(:profile).permit(:birthday, :job_title, :lives_in, :relationship_status, :owners_names,
      :breed, :fav_toy)
  end
end
