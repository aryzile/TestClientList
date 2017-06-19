using Clients.DataLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Clients.Controllers
{
    public class HomeController : Controller
    {
        private ClientsListDbContext _context = new ClientsListDbContext();

        public ActionResult Index()
        {
            return View(_context.Clients.ToList());
        }
    }
}