using GrpcDemo.Services;
using Microsoft.AspNetCore.Cors.Infrastructure;

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
            .AllowCredentials()
            .Build());
});


var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseCors("TrainerClientApp");    
app.UseGrpcWeb();
app.MapGrpcService<GreeterService>();
app.MapGrpcService<UserApiService>();
app.MapGet("/",
    () =>
        "Communication with gRPC endpoints must be made through a gRPC client. To learn how to create a client, visit: https://go.microsoft.com/fwlink/?linkid=2086909");

app.Run();