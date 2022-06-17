FROM php:7

WORKDIR /app/
COPY index.php /app/index.php
EXPOSE 8086

ENTRYPOINT ["php"]
CMD ["-S", "0.0.0.0:8086","index.php"]