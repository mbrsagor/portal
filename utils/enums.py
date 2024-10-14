from enum import IntEnum


class UserTypes(IntEnum):
    USER = 1
    MANAGER = 2
    ADMIN = 3

    @classmethod
    def get_choices(cls):
        return [(key.value, key.name) for key in cls]


class Status(IntEnum):
    PENDING = 1
    CANCEL = 2
    PROGRESS = 3
    DONE = 4

    @classmethod
    def get_status(cls):
        return [(key.value, key.name) for key in cls]
