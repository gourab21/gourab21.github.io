from scholarly import scholarly
import time
import json

# Function to fetch and print author profile
def fetch_author_profile(author_id):
    try:
        print("[*] Searching for author...")
        author = scholarly.search_author_id(author_id)
        
        # Be polite to Google Scholar
        time.sleep(5)
        
        author_filled = scholarly.fill(author)

        # Display some key info
        print("Author Name:", author_filled.get('name'))
        print("Affiliation:", author_filled.get('affiliation'))
        print("H-index:", author_filled.get('hindex'))
        print("Total Citations:", author_filled.get('citedby'))
        print("Interests:", ", ".join(author_filled.get('interests', [])))
        print("Number of Publications:", len(author_filled.get('publications', [])))

        # Optionally save to a JSON file
        with open("author_profile.json", "w", encoding='utf-8') as f:
            json.dump(author_filled, f, ensure_ascii=False, indent=4)

        print("\n✅ Profile data saved to author_profile.json")

    except Exception as e:
        print("❌ Error:", str(e))

# Author ID from the Google Scholar profile
author_id = "IV97v-wAAAAJ"
fetch_author_profile(author_id)
