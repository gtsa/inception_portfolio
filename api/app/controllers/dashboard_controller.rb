class DashboardController < ApplicationController
  # Since we're building an API, we skip CSRF protection
  # protect_from_forgery with: :null_session

  def links
    links = {
      app1: I18n.t('links.app1'),
      app2: I18n.t('links.app2'),
      api: I18n.t('links.api'),
      imosaic: I18n.t('links.imosaic'),
      backlog: I18n.t('links.backlog'),
      portfolio: I18n.t('links.portfolio'),
      blog: I18n.t('links.blog'),
      hub: I18n.t('links.hub'),
      python: I18n.t('links.python'),
    }

    render json: {
      links: links
    }
  end
end
