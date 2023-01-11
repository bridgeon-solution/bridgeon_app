// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    name: "John Doe",
    activity: [
      { reason: "absence", date: "2023-01-3" },
      { reason: "absence", date: "2023-01-9" },
      { reason: "late", date: "2023-01-6" },
    ],
  });
}
