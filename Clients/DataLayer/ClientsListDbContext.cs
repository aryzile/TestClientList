using Clients.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Clients.DataLayer
{
    public class ClientsListDbContext : DbContext
    {
        public ClientsListDbContext() : base("ClientsListDb")
        {
        }

        public DbSet<Client> Clients { get; set; }
    }
}