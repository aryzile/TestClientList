using Clients.DataLayer;
using Clients.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Web.Http;
using System.Web.Http.Description;
using System.Xml;
using System.Xml.Serialization;

namespace Clients.Controllers
{
    public class ClientsController : ApiController
    {
        private ClientsListDbContext db = new ClientsListDbContext();

        // GET: api/Clients
        public IQueryable<Client> GetClients()
        {
            return db.Clients;
        }

        public HttpResponseMessage GetClient(int id)
        {
            var client = db.Clients.FirstOrDefault(c => c.Id == id);

            if (client == null)
            {
                return new HttpResponseMessage(HttpStatusCode.NotFound);
            }

            var xs = new XmlSerializer(typeof(Client));
            var xml = string.Empty;

            using (var sw = new StringWriter())
            using (var xw = XmlWriter.Create(sw, new XmlWriterSettings { Indent = true }))
            {
                xs.Serialize(xw, client);
                xml = sw.ToString();
            }

            var result = Request.CreateResponse(HttpStatusCode.OK);
            result.Content = new StringContent(xml, Encoding.UTF8, "application/xml");
            result.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment")
            {
                FileName = $"person{client.Id}.xml"
            };

            return result;
        }

        // DELETE: api/Clients/5
        [ResponseType(typeof(Client))]
        public IHttpActionResult DeleteClient(int id)
        {
            Client client = db.Clients.Find(id);

            if (client == null)
            {
                return NotFound();
            }

            db.Clients.Remove(client);
            db.SaveChanges();

            return Ok(client);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }

            base.Dispose(disposing);
        }
    }
}
