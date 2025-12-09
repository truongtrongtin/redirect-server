export default {
  fetch: (request: Request) => {
    const { search } = new URL(request.url);
    return Response.redirect(`giant-tasks://${search}`);
  },
};
