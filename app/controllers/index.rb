WebpackIntegration::App.controllers :index do
  get '/' do
    render 'index'
  end

  get '/second' do
    render 'index_2'
  end
end