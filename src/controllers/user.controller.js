export const listPagination = async (req, res) => {

  try {

    let { page = 1, limit = 10, search = "", status, orderBy = "id", orderDir = "DESC" } = req.query;

    page = parseInt(page);
    limit = parseInt(limit);

    const users = [
      { id: 1, username: "juan", status: "active" },
      { id: 2, username: "maria", status: "active" },
      { id: 3, username: "pedro", status: "inactive" },
      { id: 4, username: "lucas", status: "active" },
      { id: 5, username: "ana", status: "inactive" }
    ];

    let filtered = users;

    // 🔎 BUSQUEDA
    if (search) {
      filtered = filtered.filter(u =>
        u.username.toLowerCase().includes(search.toLowerCase())
      );
    }

    // 🔎 FILTRO STATUS
    if (status) {
      filtered = filtered.filter(u => u.status === status);
    }

    // 🔎 ORDENAMIENTO
    filtered.sort((a, b) => {

      if (orderDir === "DESC") {
        if (a[orderBy] < b[orderBy]) return 1;
        if (a[orderBy] > b[orderBy]) return -1;
        return 0;
      } else {
        if (a[orderBy] > b[orderBy]) return 1;
        if (a[orderBy] < b[orderBy]) return -1;
        return 0;
      }

    });

    const total = filtered.length;

    const start = (page - 1) * limit;
    const end = start + limit;

    const data = filtered.slice(start, end);

    const pages = Math.ceil(total / limit);

    res.json({
      total,
      page,
      pages,
      data
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};