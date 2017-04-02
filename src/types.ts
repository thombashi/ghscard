export type DateTimeKey = (
    "created_at" |
    "fetched_at" |
    "updated_at"
);

type CommonCardDataKey = (
    DateTimeKey |
    "avatar_url" |
    "card_type" |
    "description" |
    "html_url" |
    "id" |
    "name" |
    "version"
);

export type CardStyle = (
    "medium" |
    "small" |
    "tiny"
);

export type CardType = (
    "organization" |
    "repository" |
    "user"
);

export type ElementDisplay = (
    "block" |
    "none"
);

export type UiColor = (
    "red" |
    "orange" |
    "yellow" |
    "olive" |
    "green" |
    "teal" |
    "blue" |
    "violet" |
    "purple" |
    "pink" |
    "brown" |
    "grey" |
    "black"
);

export type UiSize = (
    "huge" |
    "large" |
    "medium" |
    "small" |
    "tiny" |
    "mini"
);

export type UserOrgCardDataKey = (
    CommonCardDataKey |
    "blog" |
    "company" |
    "contributions" |
    "email" |
    "followers" |
    "following" |
    "location" |
    "organizations" |
    "profile_name" |
    "public_gists" |
    "public_members_count" |
    "public_repos" |
    "stars"
);

export type OrgCardDataKey = (
    CommonCardDataKey |
    "blog" |
    "company" |
    "email" |
    "location" |
    "public_members_count" |
    "public_repos"
);

export type UserCardDataKey = (
    CommonCardDataKey |
    "blog" |
    "company" |
    "contributions" |
    "email" |
    "followers" |
    "following" |
    "location" |
    "organizations" |
    "profile_name" |
    "public_gists" |
    "public_repos" |
    "stars"
);

export type RepoCardDataKey = (
    CommonCardDataKey |
    "commits_last_year" |
    "branches_count" |
    "contributors_count" |
    "forks_count" |
    "has_issues" |
    "has_wiki" |
    "language" |
    "languages" |
    "languages_count" |
    "latest_tag" |
    "license" |
    "open_issues_count" |
    "open_issues" |
    "organization" |
    "owner_name" |
    "owner_html_url" |
    "participation" |
    "pulls_count" |
    "repo_homepage" |
    "stargazers_count" |
    "subscribers_count" |
    "tags_count" |
    "topics" |
    "watchers_count"
);
