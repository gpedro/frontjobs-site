
# -- GULPIFY ------------------------------------------------------------------------------------------
#
# Name       : Bootstrap for Projects Gulp
# Descrition : simple bootstrap for Projects Gulp
# Version    : 0.1.0
# Author     : Daniel Castro <dancasttro@gmail.com>
#
#
# -----------------------------------------------------------------------------------------------------


# -------------------------------------------------------------------------------------
# CONFIG
# -------------------------------------------------------------------------------------

# Main
DONE  = \033[32m✔\033[32m
ERROR = \033[31m✖\033[31m
INFO  = \033[36m→\033[36m
LINE  = -----------------------------------------

# Scaffolding
SRC    = src/{scripts/vendor,styles,imgs,fonts}
PUBLIC = public/{scripts/vendor,styles,imgs,fonts}

SCRIPT = src/scripts/main.js
STYLE  = src/styles/style.scss
VIEW   = public/index.html

# Styles
STYLE_DIR = src/styles/{base,components,layout,lib}


# Global Tasks
global:
	@echo " $(INFO) Installing Dependencies... please wait."
	@sudo npm install -q


# -------------------------------------------------------------------------------------
# NEW PROJECT
# -------------------------------------------------------------------------------------

new: init_new global

	@echo " $(CHECK) Done!"

init_new:

	@echo "     ______      __         ____        _ __                __      __      "  
	@echo "    / ____/_  __/ /___     / __ )____  (_) /__  _________  / /___ _/ /____  "
	@echo "   / / __/ / / / / __ \   / __  / __ \/ / / _ \/ ___/ __ \/ / __  / __/ _ \ "
	@echo "  / /_/ / /_/ / / /_/ /  / /_/ / /_/ / / /  __/ /  / /_/ / / /_/ / /_/  __/ "
	@echo "  \____/\__,_/_/ .___/  /_____/\____/_/_/\___/_/  / .___/_/\__,_/\__/\___/  "
	@echo "              /_/                                /_/                        "


	@echo " $(INFO) Scaffolding"

	@bash -c "mkdir -p $(SRC)"
	@bash -c "mkdir -p $(PUBLIC)"
	@bash -c "mkdir -p $(STYLE_DIR)"

	@touch $(SCRIPT)
	@touch $(STYLE)
	@touch $(VIEW)
