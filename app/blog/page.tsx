import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export interface Article {
  url:                      string;
  repository_url:           string;
  labels_url:               string;
  comments_url:             string;
  events_url:               string;
  html_url:                 string;
  id:                       number;
  node_id:                  string;
  number:                   number;
  title:                    string;
  user:                     User;
  labels:                   Label[];
  state:                    string;
  locked:                   boolean;
  assignee:                 null;
  assignees:                any[];
  milestone:                null;
  comments:                 number;
  created_at:               Date;
  updated_at:               Date;
  closed_at:                null;
  author_association:       string;
  sub_issues_summary:       SubIssuesSummary;
  active_lock_reason:       null;
  body:                     string;
  closed_by:                null;
  reactions:                Reactions;
  timeline_url:             string;
  performed_via_github_app: null;
  state_reason:             null;
}

export interface Label {
  id:          number;
  node_id:     string;
  url:         string;
  name:        string;
  color:       string;
  default:     boolean;
  description: string;
}

export interface Reactions {
  url:         string;
  total_count: number;
  "+1":        number;
  "-1":        number;
  laugh:       number;
  hooray:      number;
  confused:    number;
  heart:       number;
  rocket:      number;
  eyes:        number;
}

export interface SubIssuesSummary {
  total:             number;
  completed:         number;
  percent_completed: number;
}

export interface User {
  login:               string;
  id:                  number;
  node_id:             string;
  avatar_url:          string;
  gravatar_id:         string;
  url:                 string;
  html_url:            string;
  followers_url:       string;
  following_url:       string;
  gists_url:           string;
  starred_url:         string;
  subscriptions_url:   string;
  organizations_url:   string;
  repos_url:           string;
  events_url:          string;
  received_events_url: string;
  type:                string;
  user_view_type:      string;
  site_admin:          boolean;
}


export default async function Page() {
  const response = await fetch('https://api.github.com/repos/DimplesY/Yan/issues')
  const articles: Article[] = await response.json()

  return (
    <main className="container mx-auto border-x h-full flex-1 box-border p-10 text-base">
      <ul>
        {articles?.map((article) => (
          <li key={article.id}>
            <Link className={cn(buttonVariants({ variant: 'link'}), 'text-base')} href={`/post/${article.number}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
