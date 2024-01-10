import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://ryczgwcdhpeemytlqceg.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5Y3pnd2NkaHBlZW15dGxxY2VnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQxNTY4NDcsImV4cCI6MjAxOTczMjg0N30.w6dmqZ-DP720HGlZi07Zzjs_XW9G4eHfQgvCz6ufwFs",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5Y3pnd2NkaHBlZW15dGxxY2VnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQxNTY4NDcsImV4cCI6MjAxOTczMjg0N30.w6dmqZ-DP720HGlZi07Zzjs_XW9G4eHfQgvCz6ufwFs"
    }
})