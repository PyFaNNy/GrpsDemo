using GrpcDemo.Services;
using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.AspNetCore.Server.Kestrel.Core;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddGrpc();
builder.Services.AddCors((options) =>
{
    options.AddPolicy("TrainerClientApp",
        new CorsPolicyBuilder()
            .WithOrigins("http://localhost:4200")
            .AllowAnyHeader()
            .AllowAnyMethod()
            .Build());
});

var app = builder.Build();
app.UseRouting();

// Configure the HTTP request pipeline.
app.UseCors("TrainerClientApp");    
app.UseGrpcWeb();
app.MapGrpcService<UserService>().EnableGrpcWeb();

app.Run();