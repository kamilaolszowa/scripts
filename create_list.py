users = [{"name": "Kamil", "country": "Poland"}, {
    "name": "John", "country": "USA"}, {"name": "Yeti"}]

users_from_poland = []
for user in users:
    if "country" in user and user["country"] == "Poland":
        users_from_poland.append(user)
