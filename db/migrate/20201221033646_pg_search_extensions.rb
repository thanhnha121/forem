class PgSearchExtensions < ActiveRecord::Migration[6.0]
  def up
    enable_extension("unaccent") unless "unaccent".in?(extensions)
    enable_extension("pg_trgm") unless "pg_trgm".in?(extensions)
  end

  def down
    disable_extension("unaccent") if "unaccent".in?(extensions)
    disable_extension("pg_trgm") if "pg_trgm".in?(extensions)
  end
end
