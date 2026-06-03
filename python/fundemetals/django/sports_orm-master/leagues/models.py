from django.db import models

class League(models.Model):
	name = models.CharField(max_length=50)
	sport = models.CharField(max_length=15)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)

class Team(models.Model):
	location = models.CharField(max_length=50)
	team_name = models.CharField(max_length=50)
	league = models.ForeignKey(League, related_name="teams", on_delete = models.CASCADE)

class Player(models.Model):
	first_name = models.CharField(max_length=15)
	last_name = models.CharField(max_length=15)
	curr_team = models.ForeignKey(Team, related_name="curr_players", on_delete = models.CASCADE)
	all_teams = models.ManyToManyField(Team, related_name="all_players")


# =========================
# LEAGUES QUERIES
# =========================

# all baseball leagues
def baseball_leagues():
    return League.objects.filter(sport__iexact="baseball")


# all women's leagues
def womens_leagues():
    return League.objects.filter(name__icontains="women")


# all hockey leagues
def hockey_leagues():
    return League.objects.filter(sport__icontains="hockey")


# all leagues other than football
def non_football_leagues():
    return League.objects.exclude(sport__iexact="football")


# all leagues that call themselves "conferences"
def conferences_leagues():
    return League.objects.filter(name__icontains="conference")


# all leagues in Atlantic region
def atlantic_leagues():
    return League.objects.filter(name__icontains="atlantic")


# =========================
# TEAM QUERIES
# =========================

# all teams based in Dallas
def dallas_teams():
    return Team.objects.filter(location__icontains="Dallas")


# all teams named Raptors
def raptors_teams():
    return Team.objects.filter(team_name__iexact="Raptors")


# teams whose location includes "City"
def city_location_teams():
    return Team.objects.filter(location__icontains="City")


# teams whose names begin with "T"
def teams_starting_with_t():
    return Team.objects.filter(team_name__istartswith="T")


# all teams ordered by location (A → Z)
def teams_ordered_by_location():
    return Team.objects.order_by("location")


# teams ordered by team name (Z → A)
def teams_ordered_by_name_desc():
    return Team.objects.order_by("-team_name")


# =========================
# PLAYER QUERIES
# =========================

# players with last name Cooper
def cooper_players():
    return Player.objects.filter(last_name__iexact="Cooper")


# players with first name Joshua
def joshua_players():
    return Player.objects.filter(first_name__iexact="Joshua")


# Cooper players except those with first name Joshua
def cooper_not_joshua():
    return Player.objects.filter(
        last_name__iexact="Cooper"
    ).exclude(
        first_name__iexact="Joshua"
    )


# players with first name Alexander OR Wyatt
def alexander_or_wyatt():
    return Player.objects.filter(
        (first_name__iexact="Alexander") |
        (first_name__iexact="Wyatt")
    )