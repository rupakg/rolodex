# ===========================================================================
# Project:   Rolodex
# Copyright: ©2010 Webintellix.
# ===========================================================================

# Add initial buildfile information here
config :all, :required => :sproutcore

proxy "/contacts", :to => "localhost:3000"