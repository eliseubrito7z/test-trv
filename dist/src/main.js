"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const nestjs_api_reference_1 = require("@scalar/nestjs-api-reference");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {});
    const config = new swagger_1.DocumentBuilder()
        .setTitle('TRVstore - Docs v1')
        .setDescription('The TRVstore API description')
        .setVersion('1.0')
        .addTag('TRVstore')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.use('/reference', (0, nestjs_api_reference_1.apiReference)({
        theme: 'purple',
        spec: {
            content: document,
        },
    }));
    app.enableCors();
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map