// api/solicitar.js
module.exports = (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method Not Allowed" });
  }
  return res.status(200).json({ ok: true, message: "solicitar operativo" });
};
